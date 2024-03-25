import { Button } from "@renderer/components/ui/button"
// import { run, Workflow } from '@stepci/runner'

// const workflow: Workflow = {
//   version: "1.1",
//   name: "Status Test",
//   env: {
//     host: "http://192.168.18.30:4200"
//   },
//   tests: {
//     GetCurrentTime: {
//       steps: [{
//         name: "GET GetCurrentTime",
//         http: {
//           url: "${{env.host}}/v1/graph/GetCurrentTime",
//           method: "GET",
//           auth: {
//             bearer: {
//               token: "appKey_100100"
//             }
//           },
//           check: {
//             status: "/^20/"
//           }
//         }
//       }]
//     }
//   }
// }

function App() {

  const handleClick = () => {
    
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button onClick={handleClick}>Click me</Button>
    </main>
  )
}

export default App
