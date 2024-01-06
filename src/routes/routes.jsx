import EditorPage from "../pages/EditorPage";
import HomePage from "../pages/Home";

export const routes = [
  {
    id: 1,
    index: true,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/editor/:roomId",
    element: <EditorPage />,
  },
];

export const urls = {
  EditorPage: {
    path: "/editor/:roomId",
    getUrl: (roomId) => {
      return `/editor/${roomId}`;
    },
  },
};
