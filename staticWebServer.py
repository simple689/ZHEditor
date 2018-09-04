# coding:utf-8
import os
import socket
from multiprocessing import Process

# os.system('./kill.sh staticWebServer')
# os.system('./kill.sh staticWebServer all')
PORT = 6989
HTML_ROOT_DIR = ""


def handle_client(client_socket_tmp):
    """"处理客户端请求"""
    # 构造响应数据
    response_start_line = "HTTP/1.1 200 OK\r\n"
    response_headers = "Server: My server\r\n"
    response_body = "hello"
    response = response_start_line + response_headers + "\r\n" + response_body
    print("response data : ", response)

    try:
        # 获取客户端请求数据
        request_data = client_socket_tmp.recv(1024)
        print("request_data : ", request_data)

        # 向客户端返回响应数据
        client_socket_tmp.send(bytes(response, "utf-8"))
    except Exception as e:
        print("[ERROR]%s" % e)
    finally:
        print("[OK]")




    # 关闭客户端连接
    client_socket_tmp.close()


if __name__ == "__main__":
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        server_socket.bind(("", PORT))
    except Exception as e:
        print("[ERROR]bind -> %s" % e)
        os.system('./kill.sh staticWebServer all')
    finally:
        print("[OK]bind")
    server_socket.listen(128)

    while True:
        client_socket, client_address = server_socket.accept()
        # print("[%s, %s]用户连接上了。" % client_address[0], client_address[1])
        print("[%s, %s]用户连接上了。" % client_address)
        handle_client_process = Process(target=handle_client, args=(client_socket,))
        handle_client_process.start()
        client_socket.close()