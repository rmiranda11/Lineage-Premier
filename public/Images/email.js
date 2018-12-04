var mandrill = require('node-mandrill')('<00eb17761d164bde2a0ac40e0309060c-us19>');

//send an e-mail to jim rubenstein
mandrill('/messages/send', {
    message: {
        to: [{email: 'r_miranda_11@yahoo.com', name: 'Jim Rubenstein'}],
        from_email: 'you@domain.com',
        subject: "Hey, what's up?",
        text: "Hello, I sent this message using mandrill."
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});