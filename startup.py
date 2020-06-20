#import autotimer
import sys

if sys.platform in ['Windows', 'win32', 'cygwin']:
	print('Windows')
elif sys.platform in ['Mac', 'darwin', 'os2', 'os2emx']:
    print('Mac')
elif sys.platform in ['linux', 'linux2']:
        print('linux')
# Check if the packages are installed. If not then install them.


# autotimer