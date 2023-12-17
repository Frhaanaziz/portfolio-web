import DOMPurify from 'isomorphic-dompurify';

const RichText = ({ content }: { content: string }) => {
  const cleanContent = DOMPurify.sanitize(content);

  return (
    <div
      className="mt-7 prose max-w-none dark:prose-invert text-muted-foreground"
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  );
};

export default RichText;
