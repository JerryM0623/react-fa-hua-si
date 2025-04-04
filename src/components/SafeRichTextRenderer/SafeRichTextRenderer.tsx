import DOMPurify from "dompurify";

function SafeRichTextRenderer({ dirtyHtml }: { dirtyHtml: string }) {
    // 1. 使用 DOMPurify 清理 HTML
    //    可以配置允许的标签和属性，默认配置通常已经很安全
    const cleanHtml = DOMPurify.sanitize(dirtyHtml);
    // 2. 将清理后的 HTML 通过 dangerouslySetInnerHTML 渲染
    //    因为 cleanHtml 已经是安全的了，所以这里使用是合理的
    const createMarkup = () => {
        return { __html: cleanHtml };
    }
    return (
        <div dangerouslySetInnerHTML={createMarkup()} />
    );
}

export default SafeRichTextRenderer;
