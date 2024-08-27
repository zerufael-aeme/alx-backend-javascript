export default function guardrail(mathFunction) {
  const queue = [];
  queue[1] = 'Guardrail was processed';
  try {
    queue[0] = mathFunction();   
  }catch (error){
    queue[0] = 'Error: ' + error.message;
  }
  return queue;
}
