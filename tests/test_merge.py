import copy, unittest
from pathlib import Path
import sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
from build import merge_882, merge_985, merge_course

class MergeTests(unittest.TestCase):
    def test_existing_snapshot_is_deduplicated_without_changes(self):
        for n in ['882','985']:
            _,_,c=merge_course(n)
            for e in c['entries']:
                self.assertEqual((merge_882 if n=='882' else merge_985)(copy.deepcopy(e),copy.deepcopy(e)),e)

    def test_882_same_sense_keeps_every_source_and_changed_condition_is_separate(self):
        a=dict(id='stable',term='lock',category='technical',legacyIds=['old'],weeks=['Week1'],lectures=['P'],aliases=['lock'],meanings=[dict(zh='锁',simpleEnglish='A lock.',note='before any release',basis='整理',week='Week1',lecture='P',references=[{'name':'P','page':1}],definitions=[],excerpts=[],rawSources=[])])
        b=copy.deepcopy(a);b['meanings'][0]['references']=[{'name':'P','page':2}]
        out=merge_882(a,b);self.assertEqual(len(out['meanings']),1);self.assertEqual(len(out['meanings'][0]['references']),2)
        b['meanings'][0]['note']='after commit only';out=merge_882(out,b)
        self.assertEqual(len(out['meanings']),2);self.assertEqual(out['meanings'][0]['note'],'before any release')

    def test_985_different_senses_and_original_definitions_survive(self):
        a=dict(id='old',term='Flow',category='专业英语',legacyIds=['old'],en='First use.',zh='第一种用法',basis='资料',week=1,weeks=[1],lectures=['Week1.pdf'],lectureTitles=['First'],topics=['A'],sources=[{'file':'Week1.pdf','pages':[1]}],originals=[{'text':'not always','role':'定义','source':{'file':'Week1.pdf'}}],occurrences=[])
        b=copy.deepcopy(a);b.update(id='new',en='Second use.',zh='第二种用法',week=2,weeks=[2],legacyIds=['new']);b['originals']=[{'text':'only if needed','role':'定义','source':{'file':'Week2.pdf'}}]
        out=merge_985(a,b)
        self.assertEqual(out['id'],'old');self.assertEqual(out['zh'],'第一种用法');self.assertEqual(out['occurrences'][0]['zh'],'第二种用法')
        self.assertEqual([o['text'] for o in out['originals']],['not always','only if needed']);self.assertIn('new',out['legacyIds'])

if __name__=='__main__':unittest.main()
