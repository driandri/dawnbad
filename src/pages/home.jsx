import React from "react";
import {
  Typography,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import withLoading from "@/context/withLoading";




export function Home({ showLoading, hideLoading }) {

  const routes = [
    {
      path: '/gallery',
      title: 'Galerry',
    },
    {
      path: 'https://pitch.com/public/f5d2dc98-4f08-4b9b-8d79-37633d8b8ebd',
      title: 'Pichdeck',
    },
    {
      path: '/badshop',
      title: 'Bad Shop',
      pages: <Home />
    }
  ]


  return (
    <main className="main-container flex justify-center">
      <div className="container-logo">
        <p className="font-normal text-xs">Dawn Bad Club, c. 2023</p>
        <div className="grid items-center justify-center text-center">
          <img className="grafity-logo" src="/img/logo_graffiti_22.svg" alt="Logo Grafity" />
          <ul className="nav-list md:hidden lg:hidden grid gap-3">
            {routes.map((data, i) => {
              return <Typography key={i} as="li" className="nav-item gap-5">
                {data.title == "Pichdeck"
                  ? <a href={data.path} target="_blank">{data.title}</a>
                  : <Link to={data.path}>{data.title}</Link>
                }

              </Typography>
            })}
          </ul>
        </div>

      </div>
      <footer className="absolute bottom-10 flex items-center justify-center flex-col gap-4">
        <ul className="footer-desk flex gap-24">
          {routes.map((data, i) => {
            return (
              <Typography key={i} as="li" className="nav-item">
                {data.title == "Pichdeck"
                  ? <a href={data.path} target="_blank">{data.title}</a>
                  : <Link to={data.path}>{data.title}</Link>
                }
              </Typography>
            )
          })}
        </ul>
        <ul className="flex gap-5">
          {["/img/x_logo.svg", "/img/discord_logo.svg"].map((item, i) => {
            return <li key={i}>
              <a className="cursor-pointer" href={i == [0] ? "https://twitter.com/dawnbadclub" : "https://discord.com/invite/dawnbadclub"} target="_blank" rel="noopener noreferrer">
                <img height={30} width={30} src={item} alt="" />
              </a>
            </li>
          })}

        </ul>
      </footer>
    </main>
  );
}

export default Home;
