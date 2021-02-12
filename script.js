var names = ['Joe','honey','john','Leo','james','Anthony','Mendy','Kevin','Sadio','Jack']

for(let i=0; i < names.length; 
    i++)
    {
        let name;
        name = names[i];
        if (names[i].startsWith('J') || names[i].startsWith('j')) {

          console.log("Goodbye " + name)
      }
      else{
          console.log("Hello " + name)
      }




    }