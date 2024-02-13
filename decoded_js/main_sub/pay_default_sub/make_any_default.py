import base64
with open('any_default_sub.txt', 'r') as f:
    data = f.read()
    size = len(data)
    res = ''
    sk='w4IxUULD'
    for i in range(size):
        k=i&7
        c=chr(ord(data[i])^ord(sk[k]))
        res+=c
    print(base64.b64encode(res.encode()).decode());