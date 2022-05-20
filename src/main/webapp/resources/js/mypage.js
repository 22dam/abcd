function go_cart() { // 카트 담기
  if (document.formm.quantity.value == "") {
    alert("수량을 입력하여 주세요.");
    document.formm.quantity.focus();
  } else {
    document.formm.action = "/project/cart/cartInsert";
    document.formm.submit();
  }
}

// 추가 : 2022.5.18 카트 업데이트
function go_cart_update() {
	  var count = 0;

	  if (document.formm.cseq.length == undefined) {
	    if (document.formm.cseq.checked == true) {
	      count++;
	    }
	  }

	  for ( var i = 0; i < document.formm.cseq.length; i++) { // cseq의 길이만큼 증가할 동안 찍는다
	    if (document.formm.cseq[i].checked == true) { // [i]만큼 입력
	      count++;
	      console.log("" + count); 
	    }
	  }
	  if (count == 0) { // 수량이 0이면 다시 선택 알림
	    alert("수정할 항목을 선택해 주세요.");

	  } else {
	    document.formm.action = "/project/cart/cartUpdate"; // cartUpdate로 보내주세요
	    document.formm.submit();
	  }
	}

function go_cart_delete() {
  var count = 0;

  if (document.formm.cseq.length == undefined) {
    if (document.formm.cseq.checked == true) {
      count++;
    }
  }

  for ( var i = 0; i < document.formm.cseq.length; i++) {
    // alert("" + document.formm.cseq[i].checked);
    if (document.formm.cseq[i].checked == true) {
      count++;
      // alert("" + count);
      console.log("" + count);
    }
  }
  if (count == 0) {
    alert("삭제할 항목을 선택해 주세요.");

  } else {
    // document.formm.action = "NonageServlet?command=cart_delete";
	document.formm.action = "/project/cart/cartDelete";
    document.formm.submit();
  }
}
// 2022.5.19
function go_order_insert() { // 주문
	// document.formm.action = "NonageServlet?command=order_insert";
	document.formm.action = "/project/order/orderInsert";
	document.formm.submit();
}

function go_order_delete() {
  var count = 0;

  if (document.formm.oseq.length == undefined) {
    if (document.formm.oseq.checked == true) {
      count++;
    }
  }

  for ( var i = 0; i < document.formm.oseq.length; i++) {
    if (document.formm.oseq[i].checked == true) {
      count++;
    }
  }
  if (count == 0) {
    alert("삭제할 항목을 선택해 주세요.");

  } else {
    document.formm.action = "NonageServlet?command=order_delete";
    document.formm.submit();
  }
}

function go_order() {
  document.formm.action = "NonageServlet?command=mypage";
  document.formm.submit();
}