export const addLinkToParagraph = (word, paragraph, url) => {
    const regex = new RegExp(`(${word})`, 'gi');
    const parts = paragraph.split(regex);
    return (
        <span>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="italic text-primary-bright">
                        {part}
                    </a>
                ) : (
                    part
                )
            )}
        </span>
    );
};