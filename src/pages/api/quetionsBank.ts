import AnswersModel from "../../../model/answer";
import QuestionModel from "../../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(1, "Qual é a função principal do Next.js?", [
    AnswersModel.wrong("Criar apenas APIs REST"),
    AnswersModel.wrong("Framework de CSS para React"),
    AnswersModel.wrong("Ferramenta de versionamento de código"),
    AnswersModel.wrong("Biblioteca de animações para JavaScript"),
    AnswersModel.correct("Framework React para aplicações web com SSR/SSG"),
  ]),

  new QuestionModel(
    2,
    "Qual pasta é usada para definir rotas no modelo antigo (Pages Router)?",
    [
      AnswersModel.wrong("src/"),
      AnswersModel.wrong("routes/"),
      AnswersModel.wrong("app/"),
      AnswersModel.wrong("public/"),
      AnswersModel.correct("pages/"),
    ]
  ),

  new QuestionModel(
    3,
    "No App Router (Next.js 13+), qual arquivo é obrigatório para renderizar uma rota?",
    [
      AnswersModel.wrong("index.tsx"),
      AnswersModel.wrong("route.ts"),
      AnswersModel.wrong("main.tsx"),
      AnswersModel.wrong("server.ts"),
      AnswersModel.correct("page.tsx"),
    ]
  ),

  new QuestionModel(
    4,
    "Qual método era usado no Pages Router para gerar páginas no build (SSG)?",
    [
      AnswersModel.wrong("getServerSideProps"),
      AnswersModel.wrong("getClientSideProps"),
      AnswersModel.wrong("getInitialProps"),
      AnswersModel.wrong("getDataProps"),
      AnswersModel.correct("getStaticProps"),
    ]
  ),

  new QuestionModel(5, "Qual é a função do arquivo layout.tsx no App Router?", [
    AnswersModel.wrong("Carregar variáveis de ambiente"),
    AnswersModel.wrong("Configurar rotas dinâmicas"),
    AnswersModel.wrong("Tratar erros da aplicação"),
    AnswersModel.wrong("Fazer chamadas à API"),
    AnswersModel.correct("Definir o layout persistente de rotas"),
  ]),

  new QuestionModel(
    6,
    "No Next.js, onde devem ser armazenados arquivos estáticos (imagens, fontes, ícones)?",
    [
      AnswersModel.wrong("assets/"),
      AnswersModel.wrong("static/"),
      AnswersModel.wrong("media/"),
      AnswersModel.wrong("resources/"),
      AnswersModel.correct("public/"),
    ]
  ),
  new QuestionModel(
    7,
    "Qual hook é usado para acessar o roteamento no Next.js (Pages Router)?",
    [
      AnswersModel.wrong("useNavigation()"),
      AnswersModel.wrong("useRouteParams()"),
      AnswersModel.wrong("useHistory()"),
      AnswersModel.wrong("usePathname()"),
      AnswersModel.correct("useRouter() de 'next/router'"),
    ]
  ),
  new QuestionModel(
    8,
    "Qual hook substitui useRouter no App Router para pegar a rota atual?",
    [
      AnswersModel.wrong("usePage"),
      AnswersModel.wrong("useLocation"),
      AnswersModel.wrong("useRoute"),
      AnswersModel.wrong("useParams"),
      AnswersModel.correct("usePathname de 'next/navigation'"),
    ]
  ),
  new QuestionModel(
    9,
    "Qual comando cria um novo projeto Next.js com TypeScript?",
    [
      AnswersModel.wrong("npm install next typescript"),
      AnswersModel.wrong("npx create-react-app my-app --ts"),
      AnswersModel.wrong("npx create-next-typescript my-app"),
      AnswersModel.wrong("npm create next-ts-app"),
      AnswersModel.correct("npx create-next-app@latest my-app --typescript"),
    ]
  ),
  new QuestionModel(
    10,
    "Qual destes arquivos é usado para definir variáveis de ambiente no Next.js?",
    [
      AnswersModel.wrong("config.json"),
      AnswersModel.wrong("next.config.ts"),
      AnswersModel.wrong(".next-env"),
      AnswersModel.wrong("package.json"),
      AnswersModel.correct(".env.local"),
    ]
  ),
];

export default questions;
