
        let box = document.getElementById('tooltip')
    	const hideTT = () => {
    		box.innerHTML= ''
    		box.style.display='none'
    	}
    	const showTT = (textName) => {
            let tooltipText = (tooltips[textName]) ? tooltips[textName] : 'nicht definiert'
    		box.innerHTML= tooltipText
    		box.style.display='block'
    	}
        const updateTT = (e) => {
            box = document.getElementById('tooltip')
            if (box !== null && box.style.display === 'block') {
                x = (e.pageX ? e.pageX : window.event.x) + box.offsetParent.scrollLeft - box.offsetParent.offsetLeft
                y = (e.pageY ? e.pageY : window.event.y) + box.offsetParent.scrollTop - box.offsetParent.offsetTop
                box.style.left = (x + 20) + 'px'
                box.style.top = (y + 20) + 'px'
            }
        }

        document.onmousemove= updateTT
