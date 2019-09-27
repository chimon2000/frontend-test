import { fusebox, sparky } from "fuse-box";
import { IDevServerProps } from "fuse-box/dev-server/devServerProps";
import dotenv from "dotenv";
dotenv.config();

class Context {
  runServer: boolean | IDevServerProps = {
    proxy: [
      {
        path: "/graphql",
        options: {
          target: "https://api.yelp.com/v3/",
          changeOrigin: true
        }
      }
    ]
  };
  getConfig = () =>
    fusebox({
      env: process.env,
      target: "browser",
      entry: "src/index.tsx",
      webIndex: {
        template: "src/index.html"
      },
      cache: true,
      devServer: this.runServer
    });
}
const { task } = sparky<Context>(Context);

task("default", async ctx => {
  const fuse = ctx.getConfig();
  await fuse.runDev();
});

task("preview", async ctx => {
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: false });
});
task("dist", async ctx => {
  ctx.runServer = false;
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: false });
});
