const container = document.querySelector('.container');


container.addEventListener('click', function(e){
    
    if ( e.target.classList.contains('container')){
        return;
    };

    document.body.classList.remove('green');
    document.body.classList.remove('yellow');
    document.body.classList.remove('red');

    if(e.target.classList.contains('green')){

        if(e.target.classList.contains('yellow')){
            e.target.classList.remove('yellow');
        }else if(e.target.classList.contains('red')){
            e.target.classList.remove('red');
        };
        document.body.classList.add('green');
    }else if(e.target.classList.contains('yellow')){

        if(e.target.classList.contains('green')){
            e.target.classList.remove('green');
        }else if(e.target.classList.contains('red')){
            e.target.classList.remove('red');
        };
        document.body.classList.add('yellow');
    }else if(e.target.classList.contains('red')){

        if(e.target.classList.contains('green')){
            e.target.classList.remove('green');
        }else if(e.target.classList.contains('yellow')){
            e.target.classList.remove('yellow');
        };
        document.body.classList.add('red');
    }
});