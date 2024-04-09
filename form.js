(()=>{
    const t = ()=>(Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2));
    const n = ()=>{
        const e = document.getElementById('contactForm');
        const o = t();
        const i = document.createElement('input');
        i.type = 'hidden';
        i.name = 'csrf_token';
        i.value = o;
        e.appendChild(i);
    };
    const r = e=>{
        const t = e.target;
        const n = t.querySelector('input[name="csrf_token"]');
        if (n && n.value === '') {
            e.preventDefault();
            console.error('CSRF token is missing. Form submission blocked.');
        }
    };
    const o = e=>{
        const t = e.target;
        const n = t.value;
        const o = i(n);
        if (n !== o) {
            t.value = o;
            alert('HTML tags are not allowed in this field.');
        }
    };
    const i = e=>{
        const t = document.createElement('div');
        t.textContent = e;
        return t.innerHTML;
    };
    window.onload = ()=>n();
    document.getElementById('contactForm').addEventListener('submit', r);
    document.getElementById('contactForm').addEventListener('input', o);
  })();