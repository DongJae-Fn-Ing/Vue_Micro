let boxData = [
  {
    id: "1",
    title: "경로 박스",
    type: "path",
    route: [
      { mainPath: "메인경로", subPath1: "서브경로", subPath2: "서브경로" },
      { mainPath: "메인경로", subPath1: "서브경로", subPath2: "서브경로" },
      { mainPath: "메인경로", subPath1: "서브경로", subPath2: "서브경로" },
      { mainPath: "메인경로", subPath1: "서브경로", subPath2: "서브경로" },
      { mainPath: "메인경로", subPath1: "서브경로", subPath2: "서브경로" },
    ],
  },
  {
    id: "2",
    title: "게시판 박스",
    type: "board",
    boardData: [
      {
        boardTitle: "제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
        date: "2023-03-28",
      },
      { boardTitle: "제목", date: "2023-03-28" },
      { boardTitle: "제목", date: "2023-03-28" },
      { boardTitle: "제목", date: "2023-03-28" },
    ],
  },
  {
    id: "3",
    title: "데이터 없는 박스",
    type: "no-data",
  },
];
export default boxData;
