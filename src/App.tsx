import { createSignal, Component } from "solid-js";
import { Swiper, OnReadyApi } from "solidjs-swiper";
import "./index.css"; // Import Tailwind CSS

const App: Component = () => {
  const pages = [
    { content: "Seite 1", bgColor: "bg-blue-500" },
    { content: "Seite 2", bgColor: "bg-green-500" },
  ];

  const [index, setIndex] = createSignal(0);
  let swiperApi: OnReadyApi;

  return (
    <div class="h-screen w-screen overflow-hidden">
      <Swiper
        items={pages}
        index={index()}
        onReady={(api) => {
          swiperApi = api;
        }}
        loop={false}
        onChange={(i) => setIndex(i)}
      >
        {(item) => (
          <div
            class={`h-full w-full flex items-center justify-center ${item.bgColor}`}
          >
            <h1 class="text-5xl text-white">{item.content}</h1>
          </div>
        )}
      </Swiper>
      Active index: {index()}
    </div>
  );
};
export default App;
