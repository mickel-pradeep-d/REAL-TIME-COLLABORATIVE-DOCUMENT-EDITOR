import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", { transports: ["websocket"] });

const Editor = ({ docId }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        socket.emit("join-document", docId);

        socket.on("load-document", (content) => {
            setText(content || "");
        });

        socket.on("receive-changes", (newText) => {
            setText(newText);
        });

        return () => {
            socket.off("receive-changes");
            socket.off("load-document");
        };
    }, [docId]);

    const handleChange = (value, delta, source) => {
        if (source === "user") {
            setText(value);
            socket.emit("send-changes", { docId, content: value });
            socket.emit("save-document", { docId, content: value });
        }
    };

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <ReactQuill
                value={text}
                onChange={handleChange}
                style={{ flex: 1, width: "100%" }}
                placeholder="Start typing here..."
                modules={{
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["blockquote", "code-block"],
                        ["link", "image"],
                        [{ align: [] }],
                        ["clean"],
                    ],
                }}
                formats={[
                    "header",
                    "bold",
                    "italic",
                    "underline",
                    "list",
                    "bullet",
                    "blockquote",
                    "code-block",
                    "link",
                    "image",
                    "align",
                ]}
            />
        </div>
    );
};

export default Editor;
