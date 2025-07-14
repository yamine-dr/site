import { defaultLocale, locales } from "@/src/i18n/config";
import { getTranslations } from "next-intl/server";
import { ImageResponse } from "next/og";
import { Icons } from "@/src/components/ui/Icons";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    
    const locale = searchParams.get("locale");
    if (!locale || !locales.includes(locale))
      return new NextResponse("'locale' has a wrong value or is missing", { status: 405 });

    const pageName = searchParams.get("page");
    if (!pageName || !["Root", "About", "Blog"].includes(pageName)) 
      return new NextResponse("'page' has a wrong value or is missing", { status: 405 });

    const t = await getTranslations({locale, namespace: `${pageName}Page.metadata`});

    const MontserratFont = await fetch(
      new URL("../../../assets/fonts/Montserrat-Bold.ttf", import.meta.url)
    ).then(res => res.arrayBuffer());

    const pagePath = (pageName !== "Root") ? "/"+pageName.toLowerCase() : ""
    
    return new ImageResponse(
      (
        <div 
          tw="px-10 py-30 w-full h-full flex flex-col justify-between bg-neutral-300"
          style={{ fontFamily: "Montserrat" }}
        >
          <div tw="flex flex-col">
            <Icons.YDLogo size={50}/>
            <h1 tw="text-5xl">{t("title")}</h1>
            <h3 tw="text-xl">{t("description")}</h3>
          </div>
          <div tw="flex justify-between">
            <small tw="">www.yaminedaroueche.com{pagePath}</small>
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
    return new Response("Failed to generate OG image", { status: 500 })
  }
}