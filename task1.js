let data = {
    shopia: {
        id:33,
        study:[
            {
                primary:
                [
                    {school_name: 'ABS primary school'},
                    {location:'peters burg'}
                ]
            },
            {
                secondary:
                [
                    {school_name: 'ABS high school'},
                    {location: 'london'}
                ]
            }
        ]
    }
}

console.log(data.shopia.study[1].secondary[1]);