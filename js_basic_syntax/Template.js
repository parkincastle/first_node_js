var name = "insung";
//Template

//코드상에서 줄빠꾸기 : \
//내용상에서 줄바꾸기 : \n
var letter = '친애하는 '+name+'씨에게\n\n\
귀하께서 신청하신 이벤트에 당첨되셨습니다.당첨된 상품은 곧바로 \n\
배송이 진행됩니다. 본 제품은 이벤트 상품이므로 환불은 불가능합니다.\n\n';   
console.log(letter);

//Template Literal
var letter = `친애하는 ${name}씨에게

${name}님께서 신청하신 이벤트에 당첨되셨습니다.당첨된 상품은 곧바로 
배송이 진행됩니다. 본 제품은 이벤트 상품이므로 환불은 불가능합니다.`;   
console.log(letter);