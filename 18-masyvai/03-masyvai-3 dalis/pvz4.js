let amziai = [18, 50, 75, 34, 15]

for (const amzius of amziai) {
    if (amzius < 18) {
        console.log(amzius , '- nepilnametis');
    } else if (amzius < 60) {
        console.log(amzius , '- suaugęs');
    } else {
        console.log(amzius , '- senjoras');
    }
}