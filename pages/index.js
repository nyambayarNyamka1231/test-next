import Player from "../components/Player";
import PlayerCSS from "../components/PlayerCss";

const Index = () => {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=IxQB14xVas0",
        type: "video/youtube",
      },
    ],
  };

  return (
    <>
      <Player {...videoJsOptions} />
      <h1>my next js App</h1>
      <PlayerCSS />
    </>
  );
};

export default Index;
