    /////////////////// bar 상태 숨기기 기능 /////////////////

    const checkboxFlag = document.getElementById("docker-check");

    const dock = document.querySelector('.dock-left');
    let hideTimer = null;

    // bar 숨기는 함수
    function hideDock() {
      if (!dock.matches(':hover')) {
         let dFlag = localStorage.getItem("docker");
         if( '0' === dFlag) {
            dock.classList.add('hidden');
         }
      }
    }

    // 타이머 리셋 및 설정 함수
    function resetHideTimer() {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(hideDock, 3000); // 3초 후 숨김
    }


    const mousemoveEvt = (e) => {
      const mouseX = e.clientX;

      // bar가 숨겨진 상태에서 마우스가 왼쪽 끝(5px 이내) 도달 시 보이기
      if (dock.classList.contains('hidden') && mouseX < 5) {
        dock.classList.remove('hidden');
      }

      // bar가 보이는 상태일 때만 타이머 리셋
      if (!dock.classList.contains('hidden')) {
          resetHideTimer();
      }
    }

    if (checkboxFlag.checked) {
      // 마우스 움직일 때
      document.addEventListener('mousemove', mousemoveEvt);

      // 마우스가 bar 위에 있을 땐 숨기지 않음
      dock.addEventListener('mouseenter', () => clearTimeout(hideTimer));
      dock.addEventListener('mouseleave', () => {
        if (!dock.classList.contains('hidden')) {
          resetHideTimer();
        }
      });
    }

    /////////////////// bar 상태 체크및 숨기기 기능 /////////////////

  let iconsClick = document.querySelectorAll('.icon');
  iconsClick.forEach((icon, index) => {
      icon.addEventListener('click', (event) => {
        //background-image 속성에서 이미지 경로 추출
        const style = window.getComputedStyle(event.currentTarget);
        const bgImage = style.backgroundImage;
        handleIconClick(index,bgImage);
      });
  });


  function handleIconClick(index,url) {
      /* 정규식으로 아이콘 파일명을 찾아 key값 처리 */
      const match = url.match(/\/([^\/]+)(?=\.png)/);
      if (match) {

        /* google 사이트 이동*/
        if('chrome' === match[1]){
          // location.href = "https://www.google.com"
          window.open("https://www.google.com", "_blank");
          return;
        } 

        /* android 개발자 사이트 이동 */
        if('android' === match[1]) {
          location.href = "https://developer.android.com/develop?_gl=1&hl=ko"
          return;
        }

        if('python' === match[1]){
          const iframe = document.getElementById("iframeViewer");
          iframe.src = "https://wikidocs.net/";  // X-Frame-Options 없는 사이트만 가능
          document.getElementById('main1').classList.remove('div-hidden');
          document.getElementById('main2').classList.add('div-hidden');
          return;
        }

        if('logo' === match[1]){
          alert("죽을때 쯤 작업할 계획임.")
          return;
        }

        if ('mac-os-logo' === match[1]) {
          document.getElementById('main2').classList.remove('div-hidden');
          document.getElementById('main1').classList.add('div-hidden');
          return;
        }

        /* 설정버튼 보이기 */
        if('settings' === match[1]){
          settingsPanel.classList.toggle('visible');
          return;
        }
      }
  }    