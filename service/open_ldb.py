import plyvel
import json

db = plyvel.DB('./exp', create_if_missing=True)
data = []
for key, value in db:
    obj = {"key": key, "value": json.loads(value)}
    data.append(obj)

class BytesEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, bytes):
            return obj.decode('utf-8')
        return json.JSONEncoder.default(self, obj)

with open('./exp/data.json', 'w', encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4, cls=BytesEncoder)