import requests
import base64

# 生成书页背景图片
prompt = "book page background with decorative golden border, stars, geometric patterns, light beige color, elegant design, suitable for quiz questions"

url = f"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={prompt}&image_size=landscape_16_9"

response = requests.get(url)

if response.status_code == 200:
    # 保存图片
    with open('images/book_page_bg.png', 'wb') as f:
        f.write(response.content)
    print("图片生成成功并保存到 images/book_page_bg.png")
else:
    print(f"图片生成失败: {response.status_code}")