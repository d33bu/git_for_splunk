import os, sys, time, shutil

sys.path.append("lib")
from splunklib.searchcommands import dispatch, GeneratingCommand, Configuration, Option, validators

@Configuration()
class GenerateOverwrites(GeneratingCommand):
    check = Option(require=True, validate=validators.Fieldname())
    def generate(self):
        if self.check == "all":
            if os.path.exists('../local/data/ui/views/'):
                pages = [f for f in os.listdir('../local/data/ui/views/')]
            else:
                pages = []
            if len(pages)==0:
                yield {'_time':time.time(),'_raw':'No files to remove'}
            if len(pages) > 0:
                for page in pages:
                    yield {'_time':os.path.getmtime('../local/data/ui/views/'+page), '_raw':page + ' to be removed'}
                shutil.rmtree('../local/data/ui/views')
                os.makedirs('../local/data/ui/views')
        else:
            if os.path.exists('../local/data/ui/views/'+ self.check):
                yield {'_time':os.path.getmtime('../local/data/ui/views/'+self.check), '_raw':self.check + ' removed'}
                os.remove('../local/data/ui/views/' + self.check)
            else:
                yield {'_time':time.time(),'_raw':'No page with the given name found: '+ self.check}
dispatch(GenerateOverwrites, sys.argv, sys.stdin, sys.stdout, __name__)
