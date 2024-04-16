import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        textAlign: "center",
        flexFlow: "column",
        fontSize: "1.5rem",
        background: "#3982ea",
        color: "white",
      }}
    >
      <span className={roboto.className}>My projects API</span>
      <div>
        <p className={roboto.className}>
          Link:{" "}
          <a href="/api/projects" target="_blank">
            https://my-projects-api.vercel.app/api/projects
          </a>
        </p>
      </div>
    </div>
  );
}
