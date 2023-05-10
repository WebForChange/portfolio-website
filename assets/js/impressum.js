(
    function () {
        const email = document.querySelector('#email');
        const mobile = document.querySelector('#mobile');

        // Spam Protection
        const em = "@devcomsuessdorfilgma.";
        const mo = "+12345789";
        
        // Rearranging the characters to form contact info
        email.textContent = em.substring(7, 16) + em.slice(-1) +
            em.substring(1, 4) + em[0] + em.substring(18, 21) +
            em.substring(16,18) + em.slice(-1) + em.substring(4, 7);
        mobile.textContent = mo[0] + mo[4] + mo[8] + mo[1] + mo[5] +
            mo[1] + mo[2] + mo[3] + mo[5] + mo[7] + mo[3] + mo[3] +
             + mo[6] + mo[2];
    }
)()