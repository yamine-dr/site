const iconSize = 25

const githubSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    height={iconSize}
    viewBox="0 0 20 20"
    className="text-base-content"
  >
    <g id="Page-1" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g
        id="Dribbble-Light-Preview"
        fill="currentColor"
        transform="translate(-140 -7559)"
      >
        <g id="icons" transform="translate(56 160)">
          <path
            id="github-[#142]"
            d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.4 9.4 0 0 0-2.505-.345 9.4 9.4 0 0 0-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"
          ></path>
        </g>
      </g>
    </g>
  </svg>
)

const linkedinSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width={iconSize}
    height={iconSize}
    fill="currentColor"
    version="1.1"
    viewBox="-143 145 512 512"
    className="text-base-content"
  >
    <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256M41.4 508.1H-8.5V348.4h49.9zM15.1 328.4h-.4c-18.1 0-29.8-12.2-29.8-27.7 0-15.8 12.1-27.7 30.5-27.7s29.7 11.9 30.1 27.7c.1 15.4-11.6 27.7-30.4 27.7M241 508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4-14.9 0-23.2 10-27 19.6-1.4 3.4-1.2 8.2-1.2 13.1v86.3H71.8s.7-146.4 0-159.7h56.1v25.1c3.3-11 21.2-26.6 49.8-26.6 35.5 0 63.3 23 63.3 72.4z"></path>
  </svg>
)

const atSignSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    height={iconSize}
    fill="none"
    viewBox="0 0 24 24"
    className="text-base-content"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.4 19.2A9 9 0 1 1 21 12v1.5a2.5 2.5 0 0 1-5 0V8m0 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    ></path>
  </svg>
)

const socialMediaIcons = {
  "GitHub": {
    svg: githubSvg,
    URL: "https://github.com/yamine-dr",
  },
  "LinkedIn": {
    svg: linkedinSvg,
    URL: "https://www.linkedin.com/in/yamine-daroueche-45a242228/",
  },
  "Email": {
    svg: atSignSvg,
    URL: "mailto:contact@yaminedaroueche.com",
  },
}

/**
 * SocialMediaIcon component with SVG icons of:
 * - "GitHub", "LinkedIn", "Email" (@)
 */
export default function SocialMediaIcon({ icon, title }) {
  return (
    <a
      href={socialMediaIcons[icon].URL}
      title={title}
      rel="noopener noreferrer"
      className="flex justify-center items-center max-md:scale-125"
      >
      {socialMediaIcons[icon].svg}
    </a>
  )
}