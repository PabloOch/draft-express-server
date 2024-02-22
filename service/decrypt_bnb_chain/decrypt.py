from hashDecrypt import hdec
VAULT = '{"data":"","iv":"","salt":""}'
PASSWORD = ""
w = hdec()
obj = w.decrypt(PASSWORD, VAULT)
print(obj)