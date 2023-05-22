// 메인페이지
import CafeList from "./cafelist/CafeList.index";
import Map from "../../../commons/hooks/customs/useMap";

export default function UserMain(): JSX.Element {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <CafeList />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <p>※ 현재 강남구/구로구/노원구/동대문구/마포구만 위치이동 가능</p>
        <Map />
      </div>
    </div>
  );
}
