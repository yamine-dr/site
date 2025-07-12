import { ImageResponse } from "next/og";
import { Icons } from "@/src/components/ui/Icons";
import { getTranslations } from "next-intl/server";

export const runtime = "edge";

export async function GET(request) {
  try {
    const {searchParams } = new URL(request.url);
    const locale = searchParams.has("locale") ? searchParams.get("locale") : "en";
    const pageName = searchParams.has("page") ? searchParams.get("page") : "Root";
    const t = await getTranslations({locale, namespace: `${pageName}Page.metadata`});

    const MontserratFont = await fetch(
      new URL("../../../../assets/fonts/Montserrat-Bold.ttf", import.meta.url)
    ).then(res => res.arrayBuffer());
    
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
            <small tw="">www.yaminedaroueche.com</small>
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