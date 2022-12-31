# simpleTextFormatter  
A simple TextFormatter for me.
  
## Target  
(content-0)  
(body-0)  
(body-1)  
(new line)  
(content-1)  
(body-0)  
...  
  
### Example
1.foo  
hogehoge  
piyopiyo  
  
AAAA  
foobar  

## Result(part of HTML)
```html
<h2>[content-0]</h2>
<p>[body-0]</p>
<p>[body-1]</p>
<h2>[content-1]</h2>
<p>[body-0]</p>
...
```
  
  
## Usage(with Node.js)
```
$ node textFormat "TargetFile" [mac|cr|linux|lf|windows|crlf](Optional)
```
If you use `textFormat.exe` , you don't have to setup Node.js (Windows only)  
[Download from Releases (build with nexe)](https://github.com/yyhome-tromb/simpleTextFormatter/releases/tag/v1.0)  

Example: `node textFormat "./target.txt" crlf`  
default code is CRLF(\\r\\n)  
The result is written "./formatted.txt",and it is opened automatically.  
