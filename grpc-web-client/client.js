const {HelloRequest, HelloReply} = require('../grpc-web-server/helloworld_grpc_web_pb.js');
const {GreeterClient} = require('../grpc-web-server/helloworld_pb.js');

var client = new GreeterClient('http://localhost:8080');

var request = new HelloRequest();
request.setName('Kaushik');

client.sayHello(request, {}, (err, response) => {
  console.log(response.getMessage());
});