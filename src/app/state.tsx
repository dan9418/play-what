import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import THEME from "./styles/theme";

export const octaveState = atom<number>({
  key: "octaveState",
  default: 4,
});

export const isEditingKeyState = atom<boolean>({
  key: "isEditingKey",
  default: false,
});

export const themeState = atom<typeof THEME>({
  key: "themeState",
  default: THEME,
});

interface IHistoryEntry {
  id: string;
  name: string;
  path: string;
}

export const historyState = atom<IHistoryEntry[]>({
  key: "historyState",
  default: [
    {
      id: "index",
      name: "Home",
      path: "/",
    },
  ],
});

export const useHistory = (
  id: string,
  name: string,
  path: string
): [any, any] => {
  const [history, setHistory] = useRecoilState(historyState);
  useEffect(() => {
    setHistory([
      ...history,
      {
        id,
        name,
        path,
      },
    ]);
  }, []);

  const popAt = (i) => setHistory([...history.slice(0, i || 1)]);

  return [history, popAt];
};
