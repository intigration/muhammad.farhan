import{_ as m,a as h}from"./index.js";import{c}from"./_examples_frameless-electron-window.js";import{D as f,a as r}from"./DocPage.js";import{D as p}from"./DocExample.js";import{D as g}from"./DocApi.js";import{D as i}from"./DocPrerender.js";import{C as u}from"./CopyButton.js";import{p as y,b as _,d as w,w as a,h as n,i as s,e as t,f as o}from"./vendor.js";import"./DocCode.js";import"./DocCodepen.js";import"./utils.js";import"./DocCardTitle.js";const v=n("p",null,"Quasar supplies a way for you to upload files through the QUploader component.",-1),b={class:"doc-note doc-note--tip"},U=n("p",{class:"doc-note__title"},"TIP",-1),T=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"QUploader requires a back-end server to receive the files. The examples below will not actually upload.")],-1),P=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("QUploader is "),n("code",{class:"doc-token"},"drag and drop"),s(" compliant.")])],-1),C=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"When using vee-validate, you have to rename the “fieldBagName” configuration of vee-validate for the q-uploader to work.")],-1),A=n("p",null,[s("By default, multiple files will be uploaded individually (one thread per file). Should you want all files to be uploaded in a single thread, use the "),n("code",{class:"doc-token"},"batch"),s(" property (second QUploader in the example below).")],-1),x={class:"doc-note doc-note--tip"},q=n("p",{class:"doc-note__title"},"TIP",-1),F=n("code",{class:"doc-token"},"accept",-1),R=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("Recommended format for the "),n("code",{class:"doc-token"},"accept"),s(" property is "),n("code",{class:"doc-token"},"<mediatype>/<extension>"),s(". Examples: “image/jpeg”, “image/png”. QUploader uses an "),n("code",{class:"doc-token"},'<input type="file">'),s(" under the hood and it relies entirely on the host browser to trigger the file picker. If the "),n("code",{class:"doc-token"},"accept"),s(" property (that gets applied to the input) is not correct, no file picker will appear on screen or it will appear but it will accept all file types.")])],-1),S=n("p",null,"You can also apply custom filters (which are executed after user picks files):",-1),I=n("p",null,[s("Use "),n("code",{class:"doc-token"},"headers"),s(" for setting additional XHR headers to be sent along the upload request. Also check "),n("code",{class:"doc-token"},"form-fields"),s(" prop in the API, if you need additional fields to be embedded.")],-1),Q=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("These two props ("),n("code",{class:"doc-token"},"headers"),s(" and "),n("code",{class:"doc-token"},"form-fields"),s(") can be used as a function too ("),n("code",{class:"doc-token"},"(files) => Array"),s("), allowing you to dynamically set them based on the files that are to be uploaded.")])],-1),j=n("p",null,[s("There is also the "),n("code",{class:"doc-token"},"with-credentials"),s(" property, which sets "),n("code",{class:"doc-token"},"withCredentials"),s(" to "),n("code",{class:"doc-token"},"true"),s(" on the XHR used by the upload process.")],-1),O=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("You can also customize the HTTP headers and HTTP method through "),n("code",{class:"doc-token"},"headers"),s(" and "),n("code",{class:"doc-token"},"method"),s(" props. Check QUploader API section.")])],-1),M=n("p",null,[s("There is a "),n("code",{class:"doc-token"},"factory"),s(" prop you can use which must be a Function. This function can return either an Object or a Promise resolving with an Object (and in case the Promise fails, "),n("code",{class:"doc-token"},"@factory-failed"),s(" event is emitted).")],-1),N=n("p",null,[s("The Object described above can override the following QUploader props: "),n("code",{class:"doc-token"},"url"),s(", "),n("code",{class:"doc-token"},"method"),s(", "),n("code",{class:"doc-token"},"headers"),s(", "),n("code",{class:"doc-token"},"formFields"),s(", "),n("code",{class:"doc-token"},"fieldName"),s(", "),n("code",{class:"doc-token"},"withCredentials"),s(", "),n("code",{class:"doc-token"},"sendRaw"),s("). The props of this Object can be Functions as well (of form "),n("code",{class:"doc-token"},"(file[s]) => value"),s("):")],-1),$=n("p",null,[s("You can also use the "),n("code",{class:"doc-token"},"factory"),s(" Function prop and return immediately the same Object. This is useful if you want to set multiple props (described above) simultaneously:")],-1),E=n("p",null,[s("In the example below we’re showing the equivalent of the default header. Also notice some Boolean scope properties that you can use: "),n("code",{class:"doc-token"},"scope.canAddFiles"),s(", "),n("code",{class:"doc-token"},"scope.canUpload"),s(", "),n("code",{class:"doc-token"},"scope.isUploading"),s(".")],-1),B=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("Notice that you must install and use one more component (QUploaderAddTrigger) in order to be able to add files to the queue. This component needs to be placed under a DOM node which has "),n("code",{class:"doc-token"},"position: relative"),s(" (hint: QBtn has it already) and will automatically inject the necessary events when user clicks on its parent (do NOT manually add "),n("code",{class:"doc-token"},'@click="scope.pickFiles"'),s("). If the trigger is not working, check if you have an element rendered above it and change the zIndex of QUploaderAddTrigger accordingly.")])],-1),H=n("p",null,"QUploader works by default with the HTTP(S) protocol to upload files (but it’s not limited to it as you’ll see in the section following this one).",-1),D={class:"doc-note doc-note--tip"},G=n("p",{class:"doc-note__title"},"TIP",-1),L=n("p",null,"Below is a basic server example written in Nodejs. It does nothing other than receiving the files, so consider it as a starting point.",-1),V=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(`
  express `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'express'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  app `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"express"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  formidable `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'formidable'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  path `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  fs `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:fs'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  throttle `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'express-throttle-bandwidth'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(`
  port `),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PORT"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"4444"),n("span",{class:"token punctuation"},","),s(`
  folder `),n("span",{class:"token operator"},"="),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'files'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("fs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"existsSync"),n("span",{class:"token punctuation"},"("),s("folder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  fs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mkdirSync"),n("span",{class:"token punctuation"},"("),s("folder"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'port'"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"throttle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1024"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"128"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// throttling bandwidth"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("req"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Access-Control-Allow-Origin'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'*'"),n("span",{class:"token punctuation"},")"),s(`
  res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Access-Control-Allow-Headers'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Origin, X-Requested-With, Content-Type, Accept'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("req"),n("span",{class:"token punctuation"},","),s(" res")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" form "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("formidable"),n("span",{class:"token punctuation"},"."),s("IncomingForm")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  form`),n("span",{class:"token punctuation"},"."),s("uploadDir "),n("span",{class:"token operator"},"="),s(` folder
  form`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),s("req"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("_"),n("span",{class:"token punctuation"},","),s(" fields"),n("span",{class:"token punctuation"},","),s(" files")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\\n-----------'"),n("span",{class:"token punctuation"},")"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Fields'"),n("span",{class:"token punctuation"},","),s(" fields"),n("span",{class:"token punctuation"},")"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Received:'"),n("span",{class:"token punctuation"},","),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),s("files"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Thank you'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\\nUpload server running on http://localhost:'"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),W=n("p",null,"QUploader seamlessly integrates with a Microsoft ASP.NET MVC/Core 2.x Web API backend. In your Vue file, configure the QUploader component with the desired Web API endpoint:",-1),z=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-uploader")]),s(`
  `),n("span",{class:"token attr-name"},"url"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("http://localhost:4444/fileuploader/upload"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Upload"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 300px")]),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"token punctuation"},"/>")])])],-1),J=n("p",null,"If your server requires authentication such as a JWT token, use QUploader’s factory function to specify the xhr header that will be used by QUploader. For example:",-1),X=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-uploader")]),s(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Upload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":factory"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("factoryFn"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 300px")]),n("span",{class:"token punctuation"},'"')])]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"factoryFn"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s(" reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Retrieve JWT token from your store."),s(`
        `),n("span",{class:"token keyword"},"const"),s(" token "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"myToken"'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4444/fileuploader/upload'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Authorization'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Bearer "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("token"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])],-1),Y=n("p",null,[s("The file(s) payload of QUploader will be a properly formed "),n("code",{class:"doc-token"},"IFormFileCollection"),s(" object that you can read via your ASP.NET Web API controller’s "),n("code",{class:"doc-token"},".Request"),s(" property. ASP.NET Core 2.2 Controller:")],-1),K=n("pre",{class:"doc-code"},[n("code",null,`[Route("api/[controller]")]
[ApiController]
public class FileUploaderController : ControllerBase
{
    [HttpPost]
    public async Task upload()
    {
        // Request's .Form.Files property will
        // contain QUploader's files.
        var files = this.Request.Form.Files;
        foreach (var file in files)
        {
            if (file == null || file.Length == 0)
                continue;

            // Do something with the file.
            var fileName = file.FileName;
            var fileSize = file.Length;
            // save to server...
            // ...
        }
    }
}`)],-1),Z=n("code",{class:"doc-token"},'fieldName="file"',-1),nn=n("code",{class:"doc-token"},'@RequestPart(value = "file")',-1),sn=n("pre",{class:"doc-code"},[n("code",null,[s(`// java
@RestController
public class UploadRest {
	@PostMapping("/upload")
	public void handleFileUpload(@RequestPart(value = "file") final MultipartFile uploadfile) throws IOException {
		saveUploadedFiles(uploadfile);
	}

	private String saveUploadedFiles(final MultipartFile file) throws IOException {
		final byte[] bytes = file.getBytes();
		final Path path = Paths.get("YOUR_ABSOLUTE_PATH" + file.getOriginalFilename());
		Files.write(path, bytes);
	}
}

// html
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-uploader")]),s(),n("span",{class:"token attr-name"},"field-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"url"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("YOUR_URL_BACK/upload"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"with-credentials"),s(),n("span",{class:"token punctuation"},"/>")])])],-1),tn=n("pre",{class:"doc-code"},[n("code",null,`// python
from flask import Flask, request
from werkzeug import secure_filename
from flask_cors import CORS
import os

app = Flask(__name__)

# This is necessary because QUploader uses an AJAX request
# to send the file
cors = CORS()
cors.init_app(app, resource={r"/api/*": {"origins": "*"}})

@app.route('/upload', methods=['POST'])
def upload():
    for fname in request.files:
        f = request.files.get(fname)
        print(f)
        f.save('./uploads/%s' % secure_filename(fname))

    return 'Okay!'

if __name__ == '__main__':
    if not os.path.exists('./uploads'):
        os.mkdir('./uploads')
    app.run(debug=True)`)],-1),en=n("pre",{class:"doc-code"},[n("code",null,`# Julia Genie

using Genie, Genie.Requests, Genie.Renderer

Genie.config.cors_headers["Access-Control-Allow-Origin"]  =  "*"
Genie.config.cors_headers["Access-Control-Allow-Headers"] = "Content-Type"
Genie.config.cors_headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS"
Genie.config.cors_allowed_origins = ["*"]

#== server ==#

route("/") do
  "File Upload"
end

route("/upload", method = POST) do
  if infilespayload(:img)                 # :img is file-name
    @info filename(filespayload(:img))    # file-name="img"
    @info filespayload(:img).data

    open("upload/file.jpg", "w") do io
      write(io, filespayload(:img).data)
    end
  else
    @info "No image uploaded"
  end

  Genie.Renderer.redirect(:get)
end

isrunning(:webserver) || up()`)],-1),on=n("pre",{class:"doc-code"},[n("code",null,`# Perl

use Mojolicious::Lite -signatures;

# CORS
app->hook(after_dispatch => sub {
    my $c = shift;
    $c->res->headers->header('Access-Control-Allow-Origin' => '*');
});
options '*' => sub ($c) {
   $c->res->headers->header('Access-Control-Allow-Methods' => 'GET, OPTIONS, POST, DELETE, PUT');
   $c->res->headers->header('Access-Control-Allow-Headers' => 'Content-Type');
   $c->render(text => '');
};

post '/upload' => sub ($c) {
   my $uploads = $c->req->uploads('files');

   foreach my $f (@{$uploads}) {
      $f->move_to('/tmp/' . $f->filename);
   }

   $c->render(text => 'Saved!');
};

app->start;`)],-1),an=n("p",null,"QUploader currently supports uploading through the HTTP(S) protocol. But you can extend the component to support other services as well. Like Firebase for example. Here’s how you can do it.",-1),cn=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"Help appreciated"),n("p",null,[s("We’d be more than happy to accept PRs on supporting other upload services as well, so others can benefit. Hit the "),n("code",{class:"doc-token"},"Edit this page in browser"),s(" link at bottom of this page or the pencil icon at the top of the page.")])],-1),ln=n("p",null,[s("Below is an example with the API that you need to supply to the "),n("code",{class:"doc-token"},"createUploaderComponent()"),s(" Quasar util. This will create a Vue component that you can import in your app.")],-1),pn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createUploaderComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token comment"},"// export a Vue component"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"createUploaderComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// defining the QUploader plugin here"),s(`

  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'MyUploader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// your component's name"),s(`

  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ...your custom props"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// ...your custom events name list"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"injectPlugin"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" props"),n("span",{class:"token punctuation"},","),s(" emit"),n("span",{class:"token punctuation"},","),s(" helpers "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// can call any other composables here"),s(`
    `),n("span",{class:"token comment"},"// as this function will run in the component's setup()"),s(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),s(`
    `),n("span",{class:"token comment"},"// We're working on uploading files"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" isUploading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// return <Boolean>"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// [ optional ]"),s(`
    `),n("span",{class:"token comment"},"// Shows overlay on top of the"),s(`
    `),n("span",{class:"token comment"},"// uploader signaling it's waiting"),s(`
    `),n("span",{class:"token comment"},"// on something (blocks all controls)"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" isBusy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// return <Boolean>"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),s(`
    `),n("span",{class:"token comment"},"// Abort and clean up any process"),s(`
    `),n("span",{class:"token comment"},"// that is in progress"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"abort"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),s(`
    `),n("span",{class:"token comment"},"// Start the uploading process"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"upload"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      isUploading`),n("span",{class:"token punctuation"},","),s(`
      isBusy`),n("span",{class:"token punctuation"},","),s(`

      abort`),n("span",{class:"token punctuation"},","),s(`
      upload
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),un={class:"doc-note doc-note--tip"},rn=n("p",{class:"doc-note__title"},"TIPS",-1),dn=n("li",null,[s("For the UMD version use "),n("code",{class:"doc-token"},"Quasar.createUploaderComponent({ ... })"),s(".")],-1),kn=n("p",null,"Then you register this component globally with Vue or you import it and add it to the “components: {}” in your Vue components.",-1),mn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// globally registering your component in a boot file"),s(`
`),n("span",{class:"token keyword"},"import"),s(" MyUploader "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../../path/to/MyUploader'"),s(),n("span",{class:"token comment"},"// the file from above"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" app "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MyUploader'"),n("span",{class:"token punctuation"},","),s(" MyUploader"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// or declaring it in a .vue file"),s(`
`),n("span",{class:"token keyword"},"import"),s(" MyUploader "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../../path/to/MyUploader'"),s(),n("span",{class:"token comment"},"// the file from above"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
    MyUploader
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),hn=n("p",null,"If you’re using TypeScript, you’d need to register the new component types to allow Volar to autocomplete props and slots for you.",-1),fn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  GlobalComponentConstructor`),n("span",{class:"token punctuation"},","),s(`
  QUploaderProps`),n("span",{class:"token punctuation"},","),s(`
  QUploaderSlots`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"MyUploaderProps"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"QUploaderProps"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// .. add custom props"),s(`
  `),n("span",{class:"token literal-property property"},"freeze"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// .. add custom events"),s(`
  `),n("span",{class:"token literal-property property"},"onFreeze"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

declare module `),n("span",{class:"token string"},"'@vue/runtime-core'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"GlobalComponents"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"MyUploader"),n("span",{class:"token operator"},":"),s(" GlobalComponentConstructor"),n("span",{class:"token operator"},"<"),s("MyUploaderProps"),n("span",{class:"token punctuation"},","),s(" QUploaderSlots"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),gn={__name:"uploader",setup(yn){y("_q_ex",{name:"QUploader",list:h(()=>import("./e.QUploader.js"),[])});const d=[{name:"File picker",category:"Form Components",path:"/vue-components/file"}],k=[{id:"quploader-api",title:"2. QUploader API",deep:!0},{id:"usage",title:"3. Usage"},{id:"design",title:"3.1. Design",sub:!0},{id:"uploading-multiple-files",title:"3.2. Uploading multiple files",sub:!0},{id:"restricting-upload",title:"3.3. Restricting upload",sub:!0},{id:"adding-headers",title:"3.4. Adding headers",sub:!0},{id:"handling-upload",title:"3.5. Handling upload",sub:!0},{id:"factory-function",title:"3.6. Factory function",sub:!0},{id:"slots",title:"3.7. Slots",sub:!0},{id:"server-endpoint-examples",title:"4. Server endpoint examples"},{id:"nodejs",title:"4.1. Nodejs",sub:!0},{id:"asp-net-mvc-core",title:"4.2. ASP.NET MVC/Core",sub:!0},{id:"spring",title:"4.3. Spring",sub:!0},{id:"python-flask",title:"4.4. Python/Flask",sub:!0},{id:"julia-genie",title:"4.5. Julia/Genie",sub:!0},{id:"perl-mojolicious",title:"4.6. Perl/Mojolicious",sub:!0},{id:"supporting-other-services",title:"5. Supporting other services"}];return(_n,e)=>(_(),w(f,{title:"Uploader",desc:"The QUploader Vue component is a way for the user to upload files to a backend server.",heading:"","edit-link":"vue-components/uploader",toc:k,related:d},{default:a(()=>[v,n("div",b,[U,n("p",null,[s("If all you want is an input file, you might want to consider using "),t(r,{to:"/vue-components/file"},{default:a(()=>[s("QFile")]),_:1}),s(" picker component instead.")])]),t(g,{file:"QUploader"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=l=>o(c)("usage"))},"Usage"),T,P,C,n("h3",{id:"design",class:"doc-heading doc-h3",onClick:e[1]||(e[1]=l=>o(c)("design"))},"Design"),t(p,{title:"Basic",file:"Basic"}),t(p,{title:"Force dark mode",file:"Dark"}),n("h3",{id:"uploading-multiple-files",class:"doc-heading doc-h3",onClick:e[2]||(e[2]=l=>o(c)("uploading-multiple-files"))},"Uploading multiple files"),A,t(p,{title:"Multiple",file:"Multiple"}),n("h3",{id:"restricting-upload",class:"doc-heading doc-h3",onClick:e[3]||(e[3]=l=>o(c)("restricting-upload"))},"Restricting upload"),t(p,{title:"Basic restrictions",file:"RestrictionBasic"}),n("div",x,[q,n("p",null,[s("In the example above, we’re using "),F,s(" property. Its value must be a comma separated list of unique file type specifiers. Maps to ‘accept’ attribute of native input type=file element. "),t(r,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers"},{default:a(()=>[s("More info")]),_:1}),s(".")])]),R,S,t(p,{title:"Filter",file:"RestrictionFilter"}),n("h3",{id:"adding-headers",class:"doc-heading doc-h3",onClick:e[4]||(e[4]=l=>o(c)("adding-headers"))},"Adding headers"),I,t(p,{title:"Headers",file:"Headers"}),Q,j,n("h3",{id:"handling-upload",class:"doc-heading doc-h3",onClick:e[5]||(e[5]=l=>o(c)("handling-upload"))},"Handling upload"),t(p,{title:"Auto upload on file selection",file:"UploadAuto"}),t(p,{title:"Custom upload URL",file:"UploadURL"}),O,n("h3",{id:"factory-function",class:"doc-heading doc-h3",onClick:e[6]||(e[6]=l=>o(c)("factory-function"))},"Factory function"),M,N,t(p,{title:"Promise-based factory function",file:"FactoryPromise"}),$,t(p,{title:"Immediate return factory function",file:"FactoryImmediate"}),n("h3",{id:"slots",class:"doc-heading doc-h3",onClick:e[7]||(e[7]=l=>o(c)("slots"))},"Slots"),E,B,t(p,{title:"Custom header",file:"SlotHeader"}),t(p,{title:"Custom files list",file:"SlotList"}),n("h2",{id:"server-endpoint-examples",class:"doc-heading doc-h2",onClick:e[8]||(e[8]=l=>o(c)("server-endpoint-examples"))},"Server endpoint examples"),H,n("div",D,[G,n("p",null,[s("It is by no means required to use a Nodejs server or Spring or ASP.NET like below – you can handle file upload however you want, as long as the method you are using fits the HTTP protocol. Example with "),t(r,{to:"https://secure.php.net/manual/en/features.file-upload.php"},{default:a(()=>[s("PHP")]),_:1}),s(".")])]),n("h3",{id:"nodejs",class:"doc-heading doc-h3",onClick:e[9]||(e[9]=l=>o(c)("nodejs"))},"Nodejs"),L,t(o(i),null,{default:a(()=>[V,t(u)]),_:1}),n("h3",{id:"asp-net-mvc-core",class:"doc-heading doc-h3",onClick:e[10]||(e[10]=l=>o(c)("asp-net-mvc-core"))},"ASP.NET MVC/Core"),W,t(o(i),null,{default:a(()=>[z,t(u)]),_:1}),J,t(o(i),null,{default:a(()=>[X,t(u)]),_:1}),Y,t(o(i),null,{default:a(()=>[K,t(u)]),_:1}),n("h3",{id:"spring",class:"doc-heading doc-h3",onClick:e[11]||(e[11]=l=>o(c)("spring"))},"Spring"),n("p",null,[s("Below is a "),t(r,{to:"https://spring.io/guides/gs/uploading-files/"},{default:a(()=>[s("Spring")]),_:1}),s(" example. Attribute "),Z,s(" is mapping with "),nn,s(".")]),t(o(i),null,{default:a(()=>[sn,t(u)]),_:1}),n("h3",{id:"python-flask",class:"doc-heading doc-h3",onClick:e[12]||(e[12]=l=>o(c)("python-flask"))},"Python/Flask"),t(o(i),null,{default:a(()=>[tn,t(u)]),_:1}),n("h3",{id:"julia-genie",class:"doc-heading doc-h3",onClick:e[13]||(e[13]=l=>o(c)("julia-genie"))},"Julia/Genie"),t(o(i),null,{default:a(()=>[en,t(u)]),_:1}),n("h3",{id:"perl-mojolicious",class:"doc-heading doc-h3",onClick:e[14]||(e[14]=l=>o(c)("perl-mojolicious"))},"Perl/Mojolicious"),t(o(i),null,{default:a(()=>[on,t(u)]),_:1}),n("h2",{id:"supporting-other-services",class:"doc-heading doc-h2",onClick:e[15]||(e[15]=l=>o(c)("supporting-other-services"))},"Supporting other services"),an,cn,ln,t(o(i),{title:"MyUploader.js"},{default:a(()=>[pn,t(u)]),_:1}),n("div",un,[rn,n("ul",null,[n("li",null,[s("For the default XHR implementation in the form of such a plugin, check out "),t(r,{to:"https://github.com/quasarframework/quasar/blob/dev/ui/src/components/uploader/xhr-uploader-plugin.js"},{default:a(()=>[s("source code")]),_:1}),s(".")]),dn])]),kn,t(o(i),null,{default:a(()=>[mn,t(u)]),_:1}),hn,t(o(i),null,{default:a(()=>[fn,t(u)]),_:1})]),_:1}))}},Sn=m(gn,[["__file","uploader.md"]]);export{Sn as default};
