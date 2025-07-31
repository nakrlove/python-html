const dockmove = document.querySelector('.dock-left');
let draggedItem = null;

document.querySelectorAll('.icon').forEach(icon => {
    // 드래그 시작
    icon.addEventListener('dragstart', e => {
        draggedItem = icon;
        setTimeout(() => icon.style.display = 'none', 0);
    });

    // 드래그 종료
    icon.addEventListener('dragend', e => {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    // 다른 아이콘 위에 올라왔을 때
    icon.addEventListener('dragover', e => {
        e.preventDefault(); // drop 허용
    });

    // 드롭 처리
    icon.addEventListener('drop', e => {
        e.preventDefault();
        if (icon !== draggedItem) {
            const allIcons = Array.from(dockmove.querySelectorAll('.icon'));
            const droppedIndex = allIcons.indexOf(icon);
            const draggedIndex = allIcons.indexOf(draggedItem);

            if (draggedIndex < droppedIndex) {
                dockmove.insertBefore(draggedItem, icon.nextSibling);
            } else {
                dockmove.insertBefore(draggedItem, icon);
            }
        }
    });
});