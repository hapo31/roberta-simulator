import { useEffect, useState } from "react";
import "./App.scss";
import AudioButton from "./AudioButton";
import useAudioPlay from "./hooks/useAudioPlay";

type AudioList = [string, string][][];

function App() {
  const { handlers, play } = useAudioPlay({
    defaultAudioPath: "silent.wav",
    onPlayEnd: () => setPlayingIndex((index) => index + 1),
  });
  const [playing, setPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [queue, setQueue] = useState<[string, string][]>([]);

  useEffect(() => {
    if (playing) {
      const head = queue[playingIndex];
      if (head == null) {
        setPlaying(false);
        setPlayingIndex(0);
      } else {
        const [_, path] = head;
        play(path);
      }
    }
  }, [play, playing, playingIndex, queue]);

  return (
    <div className="App" {...handlers}>
      <div className="page-title">
        <span className="title">
          ロベルタ
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ボイスシミュレーター
        </span>
        <span className="sub-title mobile-none">
          Roberta
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;voice simulator
        </span>
      </div>
      <div className="audio-lists">
        {audios.map((groups, index) => (
          <div className="audio-list-wrap" key={`gr-${index}`}>
            <div className="label-title">{groups[0][0]}</div>
            <ul className="audio-list">
              {groups.map(([label, path]) => (
                <li key={`${label}`}>
                  <AudioButton
                    label={label}
                    path={path}
                    onClick={() => {
                      setPlaying(false);
                      setPlayingIndex(0);
                      setQueue((state) => [...state, [label, path]]);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="links mobile-none">
        {/* <span className="title">リンク集</span> */}
      </div>
      <div className="queue">
        <div className="queue-list-wrap">
          <div className="queue-title mobile-none">
            <span className="title">再生リスト</span>
          </div>
          <div className="queue-list">
            {queue.map(([label], index) => (
              <span
                className={`label ${
                  playing && playingIndex === index ? "playing" : ""
                }`}
                key={`${label}${index}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="controller">
          <button className="controll-button" onClick={() => setQueue([])}>
            Clear
          </button>
          <button
            className="controll-button"
            onClick={async () => {
              setPlaying(false);
              setPlayingIndex(0);
            }}
          >
            Stop
          </button>
          <button
            className="controll-button play"
            onClick={() => setPlaying(true)}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

const audios: AudioList = [
  [
    ["作戦中1", "full_01.wav"],
    ["表面筋", "01_hyoumenkin.wav"],
    ["電位追跡", "01_deni_tsuiseki.wav"],
    ["オートフィリング", "01_autofilling.wav"],
    ["コンシーラー", "01_concealer.wav"],
  ],
  [
    ["作戦中2", "full_02.wav"],
    ["バクダンムシ", "02_bakudanmushi.wav"],
    ["抽出液", "02_chushutsueki.wav"],
    ["スタイリング", "02_styling.wav"],
    ["スプレー", "02_spray.wav"],
  ],
  [
    ["作戦中3", "full_03.wav"],
    ["フェイシャルボーン", "03_feisharuborne.wav"],
    ["フルフルストラクチャード", "03_fullstructured.wav"],
    ["セルフイメージ", "03_self_image.wav"],
    ["シェーディング", "03_shading.wav"],
    ["ハイライター", "03_highlighter.wav"],
  ],
  [
    ["作戦中4", "full_04.wav"],
    ["ウェット", "04_wet.wav"],
    ["ドライ", "04_dry.wav"],
    ["両用", "04_ryouyou.wav"],
    ["アンビエントカラー", "04_ambient_color.wav"],
    ["アダプト", "04_adapt.wav"],
    ["グロスチーク", "04_grosscheak.wav"],
  ],
];
