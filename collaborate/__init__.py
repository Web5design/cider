import json

class FileSessionManager(object):
    _instance = None
    sessions = []
    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(FileSessionManager, cls).__new__(cls, *args, **kwargs)
        return cls._instance
    def registerSession(self, fs):
        self.sessions.append(fs)
    def unregisterSession(self, fs):
        self.sessions.remove(fs)
    def notify(self, source, message):
        for i in self.sessions:
            if i != source and i.file == source.file:
                i.write_message(json.dumps(message))