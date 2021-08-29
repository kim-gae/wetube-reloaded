import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comments";
import app from "./server";

const PORT = 4000;

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
// 시작 전 어떤 port(컴퓨터의 문 혹은 창문)를 listening할지 말해 줘야 함
// callback은 무언가가 발생하고 난 다음 호출되는 함수
