//参数字符串，如果拼接在请求链接之后，需要对中文进行 URLEncode   字符集 UTF-8

public class test{


        String param = "key=5abbef3873654bdf90836ef5c304ce87&location=上海";
        StringBuilder sb = new StringBuilder();
        InputStream    is=null;
        BufferedReader br=null;
        try {
            //接口地址
            String            url        = "https://api.heweather.com/s6/weather";
            URL               uri        = new URL(url);
            HttpURLConnection connection= (HttpURLConnection) uri.openConnection();
            connection.setRequestMethod("POST");
            connection.setReadTimeout(5000);
            connection.setConnectTimeout(10000);
            connection.setRequestProperty("accept", "*/*");
            //发送参数
            connection.setDoOutput(true);
            PrintWriter out = new PrintWriter(connection.getOutputStream());
            out.print(param);
            out.flush();
            //接收结果
            is = connection.getInputStream();
            br = new BufferedReader(new InputStreamReader(is));
            String         line;
            //缓冲逐行读取
            while ( (line = br.readLine()) != null ) {
                sb.append(line);
            }
            System.out.println(sb.toString());
        }catch ( Exception ignored ){}
        finally {
            //关闭流
            try {
                if(is!=null){
                    is.close();
                }
                if(br!=null){
                    br.close();
                }
                if (out!=null){
                    out.close();
                }
            } catch (IOException e2) {}
        }
    }