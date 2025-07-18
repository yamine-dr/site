import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";
import axios from "axios";
import { redis } from "@/src/libs/redis";
// const crypto = require("node:crypto");
import * as crypto from "node:crypto";

async function fetchUserIp() {
  try {
    const response = await axios.get('https://api.ipify.org/');
    return response;
  } catch (error) {
    console.error('Error fetching ip:', error);
    return null;
  }
};

interface IpifyResponse {
  data: string;
}

/** increment the number of views of a blog post, if the user has not already seen it in the last 24h */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: number }> }
): Promise<NextResponse> {
  if (req.method !== "POST") 
    return new NextResponse("use POST", { status: 405 });

  const { id } = await params;
  if (!id) 
    return new NextResponse("ID not found", { status: 400 });
  
  const userIp: IpifyResponse | null = await fetchUserIp();
  const ip: string | undefined = userIp?.data;
  if (ip) {
    // hash the ip to respect the RGPD
    const hashedIp = crypto.createHash("sha256").update(ip).digest("hex");
    const isNewView = await redis.set(`deduplicate:${hashedIp}:post${id}`, true, {
      nx: true, // only set the key if it does not already exist
      ex: 60 * 60 * 24, // expires in 24 h -> (60 * 60 * 24) seconds
    });
    if (!isNewView) return new NextResponse(null, { status: 202 });
  }

  // increment views count only in production
  if (process.env.NODE_ENV === "production") await redis.incr(`post${id}:views`);
  return new NextResponse(null, { status: 202 });
}