import sys

sys.path.append("lib")
from splunklib.searchcommands import dispatch, GeneratingCommand, Configuration
from os import path
from os import listdir

@Configuration()
class GenerateOverwrites(GeneratingCommand):
    def generate(self):
        defaultPages = [f for f in listdir('../default/data/ui/views')]

        if path.exists('../local/data/ui/views/'):
            localPages = [f for f in listdir('../local/data/ui/views/')]
        else:
            localPages = []
        for page in localPages:
            if (page in defaultPages):
                yield {'_time':path.getmtime('../local/data/ui/views/'+page), '_raw':page}
dispatch(GenerateOverwrites, sys.argv, sys.stdin, sys.stdout, __name__)
