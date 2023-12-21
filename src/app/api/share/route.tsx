import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  const interExtrabold = fetch(
    new URL('../../../../public/Inter-ExtraBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  try {
    const { searchParams } = new URL(request.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Default title'

    console.log(title);

    return new ImageResponse(
      (
        <>
          <div className="relative w-full flex justify-center z-10">
            <div className="w-full md:w-[1000px] px-4 md:px-0 flex flex-col items-center mt-20 mb-10">
              <div className="flex flex-col items-center">
                <img src="../../home/cred.svg" alt="cred" className="w-[158px] md:w-auto" />
              </div>
              <div className="mt-20 flex flex-col md:flex-row gap-10">
                <div className="flex flex-col items-center bg-black">
                  <h1 className="text-2xl md:text-3xl font-bold">MY TOTAL CRED POINTS</h1>
                  <div
                    className="container relative mt-4 px-8 py-1 w-auto flex gap-2 justify-center items-center border-[3px] md:border-4 border-primary-default rounded-full"
                  >
                    <p className="text-[38px] md:text-[57px] font-semibold">{111111}</p>
                    <img src="/credpoints/cred.svg" alt="cred" className="w-9 md:w-[54px]" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl md:text-3xl font-bold">MY RANKING</h1>
                  <div
                    className="container relative mt-4 px-8 py-1 flex gap-2 justify-center items-center border-[3px] md:border-4 border-secondary-default rounded-full "
                  >
                    <p className="text-[38px] md:text-[57px] font-semibold">{111111}</p>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-3xl font-bold">FUN FACTS</p>
              {/* <Cards /> */}
            </div>
          </div>
        </>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await interExtrabold,
            style: 'normal',
            weight: 800,
          },
        ],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}