      /** 배경색 변경처리 */
      let theme = document.getElementById("themeSelect");
      theme.onchange = (e) => {

          //디스플레이 모드 변경처리함
          const span = document.getElementById("titleText");
          span.style.color = "black";
          if(e.target.value =='#111111, #333333')
          {
            span.style.color = "white";
          }
          document.body.style.background = `linear-gradient(to bottom right, ${e.target.value})`;
      }

      /** font 변경 */
      const labels = document.querySelectorAll(".settings-label");
      const selectBox = document.getElementById("fontSelect");
      selectBox.onchange = (e) => {
        const selectedValue = e.target.value;
        let fontClass = '';
        if (selectedValue === 'Noto') {
          fontClass = 'dongle-regular';
        } else if (selectedValue === 'Black') {
          fontClass = 'special-gothic-expanded-one-regular';
        } else {
          fontClass = 'gaegu-regular';
        }
        labels.forEach(label => {
          label.className = `settings-label ${fontClass}`;
        });
      };

      checkboxFlag.addEventListener("change", function () {
            if (checkboxFlag.checked) {
            console.log("체크됨 - Docker 보이기");
            localStorage.setItem("docker", 0);
                dock.classList.add('hidden');
            // 여기에 체크 해제되었을 때 동작 추가
            document.addEventListener('mousemove', mousemoveEvt);
            } else {
            console.log("체크 해제 - Docker 숨기기");
            // 저장
            localStorage.setItem("docker", 1);
            dock.classList.remove('hidden');
            document.removeEventListener('mousemove', mousemoveEvt);
            }
      });

      const settingsPanel = document.getElementById('settingsPanel');
      /* 설정화면 닫기 버튼 */
      const closeSettingsBtn = document.getElementById('closeSettingsBtn');
      closeSettingsBtn.onclick = () => {
        settingsPanel.classList.toggle('visible');
      }