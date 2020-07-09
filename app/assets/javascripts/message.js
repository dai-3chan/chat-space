$(function(){
  function buildHTML(message){
    if ( message.image) {
      let html = 
        `
          <div class="Chat">
            <div class="name">
              ${message.user_name}
            </div>
            <div class="date">
              ${message.created_at}
            </div>
          
          < class="message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          
        </div>`
      return html;
    } else {
      let html =
      `<div class="Chat">
          <div class="name">
            ${message.user_name}
          </div>
          <div class="date">
            ${message.created_at}
          </div>
      </div>
      <div class="message">
        <p class="Message__content">
        ${message.content}
        </p>
      </div>`
      return html;
    };
  }   

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);

      $('.main__center').append(html);
      $('.main__center').animate({ scrollTop: $('.main__center')[0].scrollHeight});
      $('.new_message')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});