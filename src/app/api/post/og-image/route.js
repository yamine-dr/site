import { locales } from "@/src/i18n/config";
import { NextResponse } from "next/server";
import { getPost } from "@/src/libs/posts";
import { ImageResponse } from "next/og";
import { Icons } from "@/src/components/ui/Icons";
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const locale = searchParams.get("locale");
    if (!locale || !locales.includes(locale))
      return new NextResponse("'locale' has a wrong value or is missing", { status: 405 });

    const slug = searchParams.get("slug");
    if (!slug) return new NextResponse("A 'slug' search param is required", { status: 405 });
    
    const post = await getPost(slug, locale);
    if (!post) return new NextResponse(`the blog post "${slug}" could not be found`, { status: 405 });

    const MontserratFont = await readFile(join(process.cwd(), 'src/assets/fonts/Montserrat-Bold.ttf'));
    
    return new ImageResponse(
      (
        <div 
          tw="px-10 py-30 w-full h-full flex flex-col justify-between bg-neutral-300"
          style={{ fontFamily: "Montserrat" }}
        >
          <div tw="flex flex-col">
            <Icons.YDLogo size={50}/>
            <h1 tw="text-5xl">{post.title}</h1>
            <h3 tw="text-xl">{post.description}</h3>
          </div>
          <div tw="flex justify-between">
            <small tw="">www.yaminedaroueche.com/blog/posts/{slug}</small>
            <div tw="flex items-center">
              <Icons.GitHub/>
              <small tw="ml-2">github.com/yamine-dr</small>
            </div>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "Montserrat",
            data: MontserratFont,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    return new NextResponse(`Failed to generate OG image: ${error}`, { status: 500 })
  }
}