(() => {
    var gyphiesArray = [
      {
        title: "Hello",
        imageUrl: 'https://media.giphy.com/media/3o7TKNKOfKlIhbD3gY/source.gif'
    },
    {
      title: "How are you?",
      imageUrl: 'https://media.giphy.com/media/3o7TKDw5NA17fKJVWU/source.gif'
  },
  {
    title: "I'm fine",
    imageUrl: 'https://media.giphy.com/media/l4Jzd71ci3msO66ac/source.gif'
}, {
  title: "Thank you so much",
  imageUrl: 'https://media.giphy.com/media/3o7TKUtetZv6DGRJxS/source.gif'
},
    {
      title: "You're welcome",
      imageUrl: 'https://media.giphy.com/media/3o7TKSRNcdPmcNmTGo/source.gif'
  },
 
  
    ] ;
    var imagesSource = document.getElementById('giphy');
    const videoElm = document.querySelector('#video');
    const btnFront = document.querySelector('#btn-front');
    const btnNext = document.querySelector('#btn-next');
    const btnPrevious = document.querySelector('#btn-previous');
    const supports = navigator.mediaDevices.getSupportedConstraints();
    if (!supports['facingMode']) {
      alert('Browser Not supported!');
      return;
    }
  
    let stream;
  
    const capture = async facingMode => {
      const options = {
        audio: false,
        video: {
          facingMode,
        },
      };
  
      try {
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
        stream = await navigator.mediaDevices.getUserMedia(options);
      } catch (e) {
        alert(e);
        return;
      }
      videoElm.srcObject = null;
      videoElm.srcObject = stream;
      videoElm.play();
    }
  
    btnFront.addEventListener('click', () => {
      capture('user');
      $("#video").css({"display":"inline"});
    });
    var index = 0;
    var word =gyphiesArray[index];
    btnNext.addEventListener('click', () => {
      index +=1;
      if(index >= gyphiesArray.length)
      {
        
        index = gyphiesArray.length-1;
        console.log(index);
        word =gyphiesArray[index];
        imagesSource.src = word.imageUrl;
        
      }
      else{
        word =gyphiesArray[index];
        imagesSource.src = word.imageUrl;
      }
     
    
    });
    btnPrevious.addEventListener('click', () => {
      index -= 1;
       
      if(index <= 0)
      {
        
        index = 0;
        console.log(index);
        word =gyphiesArray[index];
        imagesSource.src = word.imageUrl;
        
      }
      else{
        word =gyphiesArray[index];
        imagesSource.src = word.imageUrl;
      }
    });
    
  })();
